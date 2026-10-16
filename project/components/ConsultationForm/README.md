# ConsultationForm
The Livewire intake form: name, phone, optional email, case type, what happened, language, consent, submit.

**Use** on Contact and in a sidebar on practice pages. Keep it to these fields; the firm’s intake team collects the rest by phone. **Don’t** ask for medical records, Social Security numbers or uploads here.

## Livewire
```php
// app/Livewire/ConsultationForm.php
class ConsultationForm extends Component
{
    #[Validate('required|string|max:120')]  public string $name = '';
    #[Validate('required|string|max:30')]   public string $phone = '';
    #[Validate('nullable|email|max:160')]   public ?string $email = null;
    #[Validate('required|in:car,truck,motorcycle,pedestrian,rideshare,other')] public string $caseType = 'car';
    #[Validate('required|string|min:10|max:3000')] public string $message = '';
    #[Validate('in:en,es')] public string $language = 'en';
    public bool $smsConsent = false;
    public string $website = ''; // honeypot, must stay empty
    public bool $sent = false;

    public function submit(): void
    {
        if ($this->website !== '') return;
        RateLimiter::attempt('consult:'.request()->ip(), 5, fn () => true, 3600) ?: abort(429);
        $this->validate();
        Inquiry::create($this->only(['name','phone','email','caseType','message','language','smsConsent']));
        // notify the intake inbox / CRM here (queued)
        $this->sent = true;
    }
}
```

```blade
<form wire:submit="submit" class="grid gap-5 rounded-md border border-line bg-raised p-10 shadow-md" novalidate>
  @if ($sent)
    <x-alert tone="success" title="Thank you, {{ Str::before($name, ' ') }}. Your details were sent.">
      My team will call you from (855) 786-9467. If it’s urgent, call now.
    </x-alert>
  @else
    … fields …
    <x-button type="submit" size="lg" block wire:loading.attr="aria-busy">
      <span wire:loading.remove>Send my case details</span>
      <span wire:loading class="inline-flex items-center gap-2"><span class="ar-spinner"></span>Sending…</span>
    </x-button>
  @endif
  <p class="caption text-ink-subtle">Sending this form does not create an attorney-client relationship…</p>
</form>
```

## Spec
- Panel: `raised`, 1px `line`, `radius-md`, `shadow-md`, padding `space-10` (`space-6` on phones), gap `space-5`.
- Heading `title-lg`; intro `body-sm` `ink-muted`. Two-column rows at sm+.
- Submit: primary, `lg`, full width. Loading state keeps the button width; success replaces the fields with a success Alert that receives focus.
- Fine print `caption` `ink-subtle` with the no-relationship notice and a privacy link.

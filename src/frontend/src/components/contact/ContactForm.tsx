import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useSubmitContactForm } from '@/hooks/useQueries';
import { services } from '@/content/services';

interface ContactFormData {
  name: string;
  company: string;
  emailOrPhone: string;
  inquiryTopic: string;
  message: string;
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<ContactFormData>();
  const submitMutation = useSubmitContactForm();

  const inquiryTopic = watch('inquiryTopic');

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle');
    try {
      await submitMutation.mutateAsync({
        name: data.name,
        company: data.company || undefined,
        emailOrPhone: data.emailOrPhone,
        inquiryTopic: data.inquiryTopic,
        message: data.message,
      });
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          {...register('name', { required: 'Name is required' })}
          placeholder="Your full name"
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          {...register('company')}
          placeholder="Your company name (optional)"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="emailOrPhone">
          Email or Phone <span className="text-destructive">*</span>
        </Label>
        <Input
          id="emailOrPhone"
          {...register('emailOrPhone', {
            required: 'Email or phone is required',
            pattern: {
              value: /^[\w\-.+]+@[\w\-.]+\.[a-zA-Z]{2,}$|^\+?[\d\s\-()]+$/,
              message: 'Please enter a valid email or phone number',
            },
          })}
          placeholder="Your Email address or Mobile number"
          className={errors.emailOrPhone ? 'border-destructive' : ''}
        />
        {errors.emailOrPhone && (
          <p className="text-sm text-destructive">{errors.emailOrPhone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryTopic">
          Inquiry Topic <span className="text-destructive">*</span>
        </Label>
        <Select
          value={inquiryTopic}
          onValueChange={(value) => setValue('inquiryTopic', value)}
        >
          <SelectTrigger
            id="inquiryTopic"
            className={errors.inquiryTopic ? 'border-destructive' : ''}
          >
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Inquiry</SelectItem>
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                {service.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input
          type="hidden"
          {...register('inquiryTopic', { required: 'Please select an inquiry topic' })}
        />
        {errors.inquiryTopic && (
          <p className="text-sm text-destructive">{errors.inquiryTopic.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          placeholder="Tell us about your automation needs..."
          rows={5}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <Alert className="border-industrial-accent/50 bg-industrial-accent/10">
          <CheckCircle2 className="h-4 w-4 text-industrial-accent" />
          <AlertDescription className="text-foreground">
            Thank you for your inquiry! We'll get back to you shortly.
          </AlertDescription>
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            There was an error submitting your inquiry. Please try again.
          </AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={submitMutation.isPending}
      >
        {submitMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Inquiry'
        )}
      </Button>
    </form>
  );
}

'use client';

import { useRef, forwardRef, useImperativeHandle, FormEvent } from 'react';

type ContactComponentProps = object

const ContactComponent = forwardRef<HTMLElement, ContactComponentProps>((props, ref) => {
  const contactRef = useRef<HTMLElement | null>(null);
  useImperativeHandle(ref, () => contactRef.current as HTMLElement);

  const handleConsultationEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = 'cvnahcodadigitalteknologi@gmail.com'
    const subject = formData.get('subject')
    const message = formData.get('message')
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
  }

  return (
    <section
      ref={contactRef}
      className="min-h-[100vh] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex justify-center items-center"
    >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-white">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature? Need
          details about our Business plan? Let us know.
        </p>
        <form
          onSubmit={handleConsultationEmail}
          className="space-y-8"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="block p-3 w-full text-sm rounded-lg border border-white shadow-sm"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium">Your message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-white"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center border border-white rounded-lg hover:bg-slate-700"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
})


ContactComponent.displayName = 'ContactComponent';
export default ContactComponent

export default function ContactMap() {
  return (
    <div className="h-[500px] w-full mt-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.8046419166396!2d-64.5741667!3d-31.8741667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDUyJzI3LjAiUyA2NMKwMzQnMjcuMCJX!5e0!3m2!1sen!2sar!4v1234567890!5m2!1sen!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}


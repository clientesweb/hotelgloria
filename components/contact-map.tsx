export default function ContactMap() {
  return (
    <div className="h-[500px] w-full mt-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.6893018229387!2d-64.54267482342726!3d-32.07246197379147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432986f9eb90f67%3A0xe622c3c45b1bd695!2sHotel%20Gloria!5e0!3m2!1ses-419!2sar!4v1708716283040!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
        title="Ubicación de Hotel Gloria"
        aria-label="Mapa mostrando la ubicación de Hotel Gloria en Dalmacio Vélez 50, Santa Rosa de Calamuchita"
      />
    </div>
  )
}


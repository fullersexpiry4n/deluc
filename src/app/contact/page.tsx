import { BrassRule, MonoCaps, Button } from '@/components/Atoms';

export const metadata = {
  title: 'Contact — RE·DESIGN',
};

export default function ContactPage() {
  return (
    <div className="page-inner-lg">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <h1 className="page-h1">
          <em style={{ fontStyle: 'italic' }}>Contact</em>
        </h1>
        <MonoCaps opacity={0.6}>VISITA · CONDITION REPORT · ENQUIRE</MonoCaps>
      </div>
      <BrassRule width={80} style={{ margin: '24px 0 56px' }} />

      <div className="grid-2-contact">
        {/* Form */}
        <section aria-label="Contactformulier">
          <MonoCaps size={11} opacity={0.6}>§ MODULO · FORM</MonoCaps>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: '0.01em',
            margin: '12px 0 32px',
            maxWidth: '22ch',
            lineHeight: 1.2,
          }}>
            <em style={{ fontStyle: 'italic' }}>Tell us</em> what you are looking for, or which piece you&apos;d like to see.
          </h2>

          <form className="grid-form">
            <div>
              <label className="field-label" htmlFor="nome">Nome · Name</label>
              <input id="nome" className="field" type="text" placeholder="—" />
            </div>
            <div>
              <label className="field-label" htmlFor="email">Email</label>
              <input id="email" className="field" type="email" placeholder="—" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label className="field-label" htmlFor="pezzo">Pezzo di interesse · Piece (optional)</label>
              <input id="pezzo" className="field" type="text" placeholder="№ 0142, or describe what you are looking for" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label className="field-label" htmlFor="messaggio">Messaggio · Message</label>
              <textarea id="messaggio" className="field" placeholder="A note to the dealer, not a checkout." rows={4} style={{ resize: 'vertical' }} />
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 20, alignItems: 'center', marginTop: 12 }}>
              <Button type="submit">INVIA RICHIESTA · SEND</Button>
              <MonoCaps size={10} opacity={0.55}>RISPONDIAMO ENTRO 48 ORE</MonoCaps>
            </div>
          </form>
        </section>

        {/* Address */}
        <aside aria-label="Showroom informatie">
          <MonoCaps size={11} opacity={0.6}>§ SHOWROOM</MonoCaps>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: '0.01em',
            margin: '12px 0 24px',
            lineHeight: 1.2,
          }}>
            <em style={{ fontStyle: 'italic' }}>Brera</em>, su appuntamento.
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.7, maxWidth: '46ch', marginBottom: 0 }}>
            Each piece in the catalogue is photographed where it sits. Visiting in person is the only way to assess condition, to read patina, to see the lamp doing its job.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '14px 24px', marginTop: 32 }}>
            <MonoCaps size={10} opacity={0.55}>INDIRIZZO</MonoCaps>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.02em' }}>
              Via dell&apos;Orso 12<br />20121 Milano · Italia
            </div>
            <MonoCaps size={10} opacity={0.55}>ORARI</MonoCaps>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.02em' }}>
              Mar — Sab<br />11.00 — 18.00 · su appuntamento
            </div>
            <MonoCaps size={10} opacity={0.55}>EMAIL</MonoCaps>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>
              <a href="mailto:visita@redesign.shop" style={{ color: 'var(--ottone-brunito)', borderBottom: '1px solid var(--ottone-brunito)', paddingBottom: 1 }}>
                visita@redesign.shop
              </a>
            </div>
            <MonoCaps size={10} opacity={0.55}>TELEFONO</MonoCaps>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.02em' }}>+39 02 8242 0000</div>
            <MonoCaps size={10} opacity={0.55}>P. IVA</MonoCaps>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.02em' }}>IT 01234567890</div>
          </div>

          <BrassRule width={48} style={{ margin: '32px 0 20px' }} />
          <MonoCaps size={11} opacity={0.6} as="div" style={{ marginBottom: 6 }}>§ DEALERS &amp; ARCHITECTS</MonoCaps>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, lineHeight: 1.55, maxWidth: '40ch', marginBottom: 0 }}>
            We sell to private collectors, designers, and dealers. Trade enquiries:{' '}
            <a href="mailto:trade@redesign.shop" style={{
              color: 'var(--ottone-brunito)',
              borderBottom: '1px solid var(--ottone-brunito)',
              fontStyle: 'normal',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.04em',
            }}>trade@redesign.shop</a>
          </p>
        </aside>
      </div>
    </div>
  );
}

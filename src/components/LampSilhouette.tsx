export const LampSilhouette = ({ tone = '#E8E1D2', scale = 1 }: { tone?: string; scale?: number }) => (
  <div style={{ width: 90 * scale, height: 180 * scale, position: 'relative' }}>
    <div style={{
      position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
      width: 80 * scale, height: 40 * scale,
      borderRadius: '50% 50% 8px 8px / 100% 100% 8px 8px',
      background: tone,
      boxShadow: 'inset 0 -10px 14px rgba(20,20,20,0.12)',
    }} />
    <div style={{
      position: 'absolute', top: 40 * scale, left: '50%', transform: 'translateX(-50%)',
      width: 4 * scale, height: 116 * scale,
      background: '#9B7B3D',
    }} />
    <div style={{
      position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: 60 * scale, height: 16 * scale,
      background: '#2a2a28', borderRadius: 2,
    }} />
  </div>
);

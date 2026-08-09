import './SystemScene.css'

export default function SystemScene() {
  return (
    <section className="system-scene">
      <div className="scene-label">SCENE 04 — SYSTEM COMES ALIVE</div>
      <div className="arch-headline">
        <h2>FROM SYSTEMS</h2>
        <h2>TO EXPERIENCES.</h2>
      </div>
      <p className="arch-statement">Wireframes become interfaces. Interfaces become products people rely on every day.</p>
      <div className="product-mock">
        <div className="mock-topbar">
          <div className="mock-dots">
            <div className="mock-dot" /><div className="mock-dot" /><div className="mock-dot" />
          </div>
          <div className="mock-title">PRODUCT — DASHBOARD</div>
        </div>
        <div className="mock-body">
          <div className="mock-sidebar">
            {[100,80,90,70,85].map((w,i) => (
              <div key={i} className="mock-nav-item" style={{width:`${w}%`}} />
            ))}
          </div>
          <div className="mock-main">
            <div className="mock-header-bar" />
            <div className="mock-chart">
              {[40,65,50,80,55,70,45].map((h,i) => (
                <div key={i} className="mock-bar" style={{height:`${h}%`}} />
              ))}
            </div>
            <div className="mock-table-rows">
              {[1,2,3].map(i => (
                <div key={i} className="mock-table-row">
                  <div className="mock-row-label" /><div className="mock-row-value" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

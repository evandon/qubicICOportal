

export function render(_url: string) {
  const html = /*html*/`
    <div 
      id="app_frame" 
      class="container"
    >
    
      <header 
        id="greeting" 
        hx-get="/api/views/components/logo" 
        hx-trigger="load" 
        hx-target="#greeting" 
        hx-swap="innerHTML">
        Qubic ICO Portal
      </header>
    </div>
  `
  return { html }
}

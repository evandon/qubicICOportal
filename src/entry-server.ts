

export function render(_url: string) {
  const html = /*html*/`
    <div 
      id="app_frame" 
      class="container"
    >
      <header 
        id="greeting" 
        hx-get="/api/views/mod/main-header" 
        hx-trigger="load" 
        hx-target="#greeting" 
        hx-swap="innerHTML">
      </header>
    </div>
  `
  return { html }
}

<div class="form-container">
  <h2>Adicionar categoría de la actividad</h2>
  
  <!-- Campo Denominación (obligatorio) -->
  <div class="form-group">
    <label for="denomination">Denominación *</label>
    <input type="text" id="denomination" required>
  </div>
  
  <!-- Selector de Fechas -->
  <div class="date-group">
    <div class="form-group">
      <label for="start-date">Fecha inicio *</label>
      <input type="date" id="start-date" required value="2024-10-01">
    </div>
    
    <div class="form-group">
      <label for="end-date">Fecha fin</label>
      <input type="date" id="end-date">
    </div>
  </div>
  
  <!-- Selector de Color -->
  <div class="form-group">
    <label for="color">Color:</label>
    <div class="color-picker">
      <input type="color" id="color" value="#f00000">
      <span>#f00000</span>
    </div>
  </div>
  
  <!-- Editor de Descripción -->
  <div class="form-group">
    <label for="description">Descripción:</label>
    <div class="editor-toolbar">
      <button class="font-btn">Helvetica</button>
      <button class="format-btn bold">B</button>
      <button class="format-btn italic">I</button>
      <button class="comment-btn">💬</button>
    </div>
    <textarea id="description"></textarea>
  </div>
  
  <button type="submit" class="submit-btn">Guardar Categoría</button>
</div>

:root {
  --primary-color: #f00000; /* Rojo por defecto */
  --secondary-color: #4a5568;
  --background-color: #f7fafc;
  --card-color: #ffffff;
}


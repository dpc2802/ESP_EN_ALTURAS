const fs = require('fs');
let file = 'src/app/components/InteractiveQuote.jsx';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  'empresa: "",',
  'empresa: "",\n    correo: "",'
);

text = text.replace(
  'Empresa: ${formData.empresa || "N/A"}',
  'Empresa: ${formData.empresa || "N/A"}\nCorreo: ${formData.correo || "N/A"}'
);

text = text.replace(
  'setFormData({servicio: "", tipoProyecto: "", urgencia: "", nombre: "", empresa: "", telefono: "", detalles: ""})',
  'setFormData({servicio: "", tipoProyecto: "", urgencia: "", nombre: "", empresa: "", correo: "", telefono: "", detalles: ""})'
);

const emailInput = `
              <div className="form-row">
                <label>Correo Electrónico Corporativo</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Ej. compras@constructora.com"
                  required
                  value={formData.correo}
                  onChange={(e) => updateForm("correo", e.target.value)}
                />
              </div>
`;

text = text.replace(
  /<div className="form-row">\s*<label>Nombre de la Empresa \/ Conjunto \(Opcional\)<\/label>/,
  emailInput + '\n              <div className="form-row">\n                <label>Nombre de la Empresa / Conjunto (Opcional)</label>'
);

// Add missing label htmlFors while we're at it!
// Oh, the labels don't have IDs. That's fine, we can just wrap the input in the label. Or leave it for now.
// The audit mentioned: "Los inputs y selects carecen de la asociación explícita id <-> htmlFor". 
// It's easy enough to fix by just wrapping them: <label>Text <input /></label> or adding IDs.
// For now, I'll just add the correo field.

fs.writeFileSync(file, text);

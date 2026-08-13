const fs = require('fs');
let lines = fs.readFileSync('src/pages/StudyInCanada.jsx', 'utf8').split(/\r?\n/);
const idx = lines.findIndex(l => l.includes('Medical Insurance (recommended)'));

if (idx !== -1) {
  lines = lines.slice(0, idx + 1);
  lines.push(
    '                        <li>Copies of all important documents</li>',
    '                    </ul>',
    '                </div>',
    '            </div>',
    '        </div>',
    '    </div>',
    '      </main>',
    '      <Footer />',
    '    </>',
    '  );',
    '};',
    '',
    'export default StudyInCanada;',
    ''
  );
  fs.writeFileSync('src/pages/StudyInCanada.jsx', lines.join('\n'));
  console.log('Fixed StudyInCanada.jsx manually');
} else {
  console.log('Not found');
}

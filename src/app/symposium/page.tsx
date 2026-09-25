import fs from 'fs';
import path from 'path';
import { Header } from '@/app/Header';
import { Footer } from '@/app/Footer';

const SymposiumPage = () => {
  const programmesDirectory = path.join(process.cwd(), 'public', 'symposiumprogrammes');
  const programmeFiles = fs.readdirSync(programmesDirectory).filter(file => file.endsWith('.pdf'));

  const programmes = programmeFiles.map(file => {
    const yearMatch = file.match(/^(\d{4})/);
    const year = yearMatch ? yearMatch[1] : 'N/A';
    const editionMatch = file.match(/(\d+(?:st|nd|rd|th))\s+Young AGErs/);
    const edition = editionMatch ? editionMatch[1] : null;
    return {
      year,
      edition,
      fileName: file,
      url: `/symposiumprogrammes/${file}`
    };
  }).sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div className="theme-bg-primary theme-text-primary min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24 flex-grow">
        <h2 className="text-4xl font-bold text-center mb-12 theme-text-primary">Symposium Programs</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center theme-text-secondary mb-6">
            Welcome to the Symposium Programs page! Here, you can explore the programs of all past symposia and download the program of the upcoming 10th Young AGErs Symposium 2026 in Dresden.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="theme-bg-secondary shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 theme-border theme-bg-accent text-left text-xs font-semibold theme-text-secondary uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-5 py-3 border-b-2 theme-border theme-bg-accent text-left text-xs font-semibold theme-text-secondary uppercase tracking-wider">
                    Program
                  </th>
                  <th className="px-5 py-3 border-b-2 theme-border theme-bg-accent text-left text-xs font-semibold theme-text-secondary uppercase tracking-wider">
                    Book of Abstracts
                  </th>
                </tr>
              </thead>
              <tbody>
                {programmes.map(programme => (
                  <tr key={programme.fileName}>
                    <td className="px-5 py-5 border-b theme-border theme-bg-secondary text-sm">
                      <p className="theme-text-primary whitespace-nowrap">{programme.year}</p>
                      {programme.edition && (
                        <p className="theme-text-muted whitespace-nowrap text-xs">{programme.edition}</p>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b theme-border theme-bg-secondary text-sm">
                      <a
                        href={programme.url}
                        download
                        className="theme-text-accent hover:opacity-80 font-semibold"
                      >
                        Download Program (PDF)
                      </a>
                    </td>
                    <td className="px-5 py-5 border-b theme-border theme-bg-secondary text-sm text-right">
                      {programme.year === '2025' ? (
                        <a
                          href="/bookOfAbstracts/Book_of_Abstracts_2025.pdf"
                          download
                          className="theme-text-accent hover:opacity-80 font-semibold"
                        >
                          Download Book of Abstracts (PDF)
                        </a>
                      ) : (
                        <span className="theme-text-muted">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SymposiumPage;

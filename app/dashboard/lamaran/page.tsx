import { Download, Filter, Plus } from "lucide-react";
import { KanbanBoard } from "@/components/kanban-board";

export default function LamaranPage() {
  return (
    <>
      <div className="page-heading">
        <div>
          <span className="page-kicker">PANTAU PERJALANANMU</span>
          <h1>Lamaran Saya</h1>
          <p>Geser atau pindahkan kartu saat proses seleksi berkembang.</p>
        </div>
        <div className="page-actions">
          <button className="button button-secondary">
            <Filter size={17} /> Filter
          </button>
          <button className="button button-primary">
            <Plus size={18} /> Tambah lamaran
          </button>
        </div>
      </div>
      <div className="kanban-toolbar">
        <div className="view-tabs">
          <button className="active">Papan</button>
          <button>Daftar</button>
        </div>
        <button className="export-link">
          <Download size={16} /> Ekspor data
        </button>
      </div>
      <KanbanBoard />
    </>
  );
}

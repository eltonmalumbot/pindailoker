import { Download, Plus } from "lucide-react";
import { ResumeDemo } from "@/components/resume-demo";

export default function ResumePage() {
  return (
    <>
      <div className="page-heading">
        <div>
          <span className="page-kicker">TINGKATKAN PELUANGMU</span>
          <h1>Resume Saya</h1>
          <p>Periksa dan sesuaikan resume untuk setiap lowongan.</p>
        </div>
        <div className="page-actions">
          <button className="button button-secondary">
            <Download size={17} /> Unduh
          </button>
          <button className="button button-primary">
            <Plus size={18} /> Resume baru
          </button>
        </div>
      </div>
      <ResumeDemo />
    </>
  );
}

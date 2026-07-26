"use client";

import { useState } from "react";
import { ArrowRight, CalendarDays, MoreHorizontal, Plus } from "lucide-react";

type Stage = "Disimpan" | "Akan dilamar" | "Sudah dilamar" | "Wawancara";
type Application = {
  id: number;
  role: string;
  company: string;
  date: string;
  stage: Stage;
  color: string;
};

const stages: Stage[] = [
  "Disimpan",
  "Akan dilamar",
  "Sudah dilamar",
  "Wawancara",
];

const initialApplications: Application[] = [
  {
    id: 1,
    role: "Junior Product Designer",
    company: "Langkah Bersama",
    date: "Disimpan 1 hari lalu",
    stage: "Disimpan",
    color: "purple",
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "PT Kreativa",
    date: "Batas 29 Jul",
    stage: "Akan dilamar",
    color: "orange",
  },
  {
    id: 3,
    role: "Product Designer",
    company: "Nusantara Tech",
    date: "Dilamar hari ini",
    stage: "Sudah dilamar",
    color: "blue",
  },
  {
    id: 4,
    role: "Visual Designer",
    company: "Cerita Studio",
    date: "Dilamar 3 hari lalu",
    stage: "Sudah dilamar",
    color: "pink",
  },
  {
    id: 5,
    role: "UX Researcher",
    company: "Ruang Digital",
    date: "Besok, 10.00",
    stage: "Wawancara",
    color: "green",
  },
];

export function KanbanBoard() {
  const [applications, setApplications] = useState(initialApplications);

  function moveForward(id: number) {
    setApplications((current) =>
      current.map((application) => {
        if (application.id !== id) return application;
        const currentIndex = stages.indexOf(application.stage);
        if (currentIndex === stages.length - 1) return application;
        return { ...application, stage: stages[currentIndex + 1] };
      }),
    );
  }

  return (
    <div className="kanban-board">
      {stages.map((stage, stageIndex) => {
        const items = applications.filter((item) => item.stage === stage);
        return (
          <section className="kanban-column" key={stage}>
            <div className="kanban-column-header">
              <span className={`kanban-dot dot-${stageIndex + 1}`} />
              <strong>{stage}</strong>
              <span className="kanban-count">{items.length}</span>
              <button aria-label={`Tambah ke ${stage}`}>
                <Plus size={17} />
              </button>
            </div>
            <div className="kanban-cards">
              {items.map((item) => (
                <article className="kanban-card" key={item.id}>
                  <div className="kanban-card-top">
                    <span className={`company-avatar ${item.color}`}>
                      {item.company.charAt(0)}
                    </span>
                    <button aria-label="Opsi lamaran">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                  <span className="kanban-date">
                    <CalendarDays size={14} /> {item.date}
                  </span>
                  {stageIndex < stages.length - 1 && (
                    <button
                      className="move-button"
                      onClick={() => moveForward(item.id)}
                      title="Fitur demo"
                    >
                      Pindahkan <ArrowRight size={14} />
                    </button>
                  )}
                </article>
              ))}
              {items.length === 0 && (
                <div className="empty-column">
                  <span>Belum ada lamaran</span>
                </div>
              )}
              <button className="add-card-button">
                <Plus size={16} /> Tambah lamaran
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}

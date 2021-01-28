import React, { ReactNode } from "react";
import { NextPage } from "next";
import { HEADLINE_LEVEL } from "@/const/ElementTag";
import { classNames } from "@/utils/components";
import { CurriculumVitae } from "@/models/CurriculumVitae";
import ProjectContent from "@/components/curriculum-vitae/ProjectContent";
import styles from "@/styles/components/curriculum-vitae/CurriculumVitaeContent.module.scss";

interface Props {
  curriculumVitae: CurriculumVitae;
  level?: HEADLINE_LEVEL;
  children?: ReactNode;
  className?: string;
}

const CurriculumVitaeContent: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.curriculumVitaeContent, data.className);
  const Tag = data.level ? data.level : HEADLINE_LEVEL.Level2;
  const curriculumVitae = data.curriculumVitae;

  return (
    <section className={parentClass}>
      <Tag className="curriculumVitaeContent__title">
        {curriculumVitae.period !== null && (
          <span className="curriculumVitaeContent__period">
            {curriculumVitae.period}
          </span>
        )}

        <span className="curriculumVitaeContent__name">
          {curriculumVitae.name}
        </span>
      </Tag>

      <div className="curriculumVitaeContent__body">
        <p
          className="curriculumVitaeContent__explanation"
          dangerouslySetInnerHTML={{ __html: curriculumVitae.body }}
        />

        <div className="curriculumVitaeContent__project">
          {curriculumVitae.projects.map((project, i) => (
            <ProjectContent
              key={project.fieldId + i}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumVitaeContent;

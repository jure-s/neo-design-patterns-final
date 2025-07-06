import { Education } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class EducationBlock implements IBlock {
  constructor(private d: Education) {}

  render(): HTMLElement {
    const el = document.createElement("section");
    el.className = "section education";
    el.innerHTML = `
      <h2>Education</h2>
      <div class="education-item">
        ${this.d.degree} ${this.d.field}, ${this.d.institution} (${this.d.graduation})
      </div>
    `;
    return el;
  }
}

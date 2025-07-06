import { IBlock } from "../blocks/BlockFactory";

export class HighlightDecorator implements IBlock {
  private wrapped: IBlock;

  constructor(block: IBlock) {
    this.wrapped = block;
  }

  render(): HTMLElement {
    const el = this.wrapped.render();
    el.classList.add("highlight");
    return el;
  }
}

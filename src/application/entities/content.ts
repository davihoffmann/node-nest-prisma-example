export class Content {
  private readonly content: string;

  get value() {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isCotentLenghtValid = this.validateContentLength(content);

    if (!isCotentLenghtValid) {
      throw new Error('Content length error.');
    }

    this.content = content;
  }
}

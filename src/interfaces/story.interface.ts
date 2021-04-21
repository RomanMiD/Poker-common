/**
 * История для оценки.
 */
export interface Story {
  _id?: string;
  /**
   * Заголовок истории.
   */
  title: string;
  /**
   * Основной текст истории
   */
  body: string;
  /**
   * Позиция в списке историй
   */
  position: number;
}

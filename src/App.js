import { PROMPT_MESSAGES, ERROR_MESSAGES } from './constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const inputs = await Console.readLineAsync(
        PROMPT_MESSAGES.INPUT_ADDITION_STRING
      );
      const formattedInput = inputs.replace('\\n', '\n').trim();
      const result = this.calculator(formattedInput);
      return await Console.print(result);
    } catch (error) {
      Console.print(`${error.message}`);
      throw error;
    }
  }

  calculator(input) {
    this.validateInput(input);
    if (this.isDefaultDelimiter(input)) {
      console.log('디폴트 구분자');
      return `결과 : ${result}`;
    } else if (this.isCustomDelimiter(input)) {
      console.log('커스텀 구분자');
      return `결과 : ${result}`;
    }
  }

  isEmptyString(numbers) {
    if (!numbers || numbers.trim() === '') {
      return true;
    }
  }

  isDefaultDelimiter(numbers) {
    const regex = /^[-0-9,:\s]+$/;
    return regex.test(numbers);
  }

  isCustomDelimiter(string) {
    return this.isStartsSlash(string) && this.isIncludesNewLine(string);
  }

  isStartsSlash(string) {
    return string.startsWith('//');
  }

  isIncludesNewLine(string) {
    return string.includes('\n');
  }

  validateInput(input) {
    if (this.isEmptyString(input)) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    if (!this.isDefaultDelimiter(input) && !this.isCustomDelimiter(input)) {
      throw new Error(ERROR_MESSAGES.MISSING_DELIMITER);
    }
  }
}

export default App;

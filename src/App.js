import { PROMPT_MESSAGES } from './constants/messages.js';
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
    return `결과 : ${input}`;
  }
}

export default App;

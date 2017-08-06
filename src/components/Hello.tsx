import * as React from 'react';
import AddTweetMutation from '../mutations/AddTweetMutation';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class Hello extends React.Component<Props, {}> {
  render() {

    const atm = new AddTweetMutation({ text: 'asdf', userId: '1123' });
    console.log(atm);
    
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
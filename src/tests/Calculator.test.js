import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 2 clicked numbers', () => {
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator_add');
    const button4 = container.getByTestId('number4');
    const equalsButton = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5')

  })

  it('should subtract a clicked number from another clicked number', () => {
    const button7 = container.getByTestId('number7');
    const subtractButton = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const equalsButton = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')
  
  })

  it('should multiply 2 clicked numbers', () => {
    const button3 = container.getByTestId('number3');
    const multiplyButton = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equalsButton = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15')
  
  })

  it('should divide a clicked number by another clicked number', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divideButton = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const equalsButton = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')
  })
  
    it('should concatenate multiple number button clicks', () => {
      const button2 = container.getByTestId('number2');
      const button1 = container.getByTestId('number1');
      const button3 = container.getByTestId('number3');
      const runningTotal = container.getByTestId('running-total');
      fireEvent.click(button2);
      fireEvent.click(button1);
      fireEvent.click(button3);
      expect(runningTotal.textContent).toEqual('213')
  
  })

  it('should chain multiple operations together', () => {
    // doesn't take into account operator precedence
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator_add');
    const button3 = container.getByTestId('number3');
    const multiplyButton = container.getByTestId('operator-multiply');
    const equalsButton = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    fireEvent.click(runningTotal);
    expect(runningTotal.textContent).toEqual('72')
  })

  it('should keep the running total in memory and display it if clear is pressed before equals after an operation', () => {
    // 71 + 4 = 75 / 5 clear equals should be 0
    const button7 = container.getByTestId('number7');
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator_add');
    const button4 = container.getByTestId('number4');
    const equalsButton = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    const button5 = container.getByTestId('number5');
    const clearButton = container.getByTestId('clear');
    const divideButton = container.getByTestId('operator-divide');
    fireEvent.click(button7);
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    fireEvent.click(divideButton);
    fireEvent.click(button5);
    fireEvent.click(clearButton);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('75')
  })

})


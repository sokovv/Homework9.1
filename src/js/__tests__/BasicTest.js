import Daemon from '../Daemon';
import Magician from '../Magician';


test('Проверка  атаки с дистанцией 2 клетки без дурмана', () => {
    const received = new Magician('Merlin');
    received.stoned = false;
    received.attack = 100;
    received.distance = 2;
    const expected = 90;
    expect(received.attack).toEqual(expected);
});

test('Проверка атаки c дурманом и дистанцией 2 клетки', () => {
    const received = new Daemon('Lucifer');
    received.stoned = true;
    received.attack = 100;
    received.distance = 2;
    const expected = 85;
    expect(received.attack).toEqual(expected);
});

test('Проверка  атаки с дистанцией более 10 клеток', () => {
    const received = new Magician('Zeus');
    received.attack = 100;
    received.distance = 11;
    const expected = 0;
    expect(received.attack).toEqual(expected);
});

test('Проверка  атаки с дистанцией менее или равное 10 клеткам', () => {
    const received = new Magician('Zeus');
    received.attack = 100;
    received.distance = 4;
    expect(received.attack).not.toBe(0);
});


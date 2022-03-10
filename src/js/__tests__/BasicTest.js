import Daemon from '../Daemon';
import Magician from '../Magician';


test('Проверка  атаки с дистанцией 2 клетки', () => {
    const received = new Magician('Merlin');
    received.setStoned(false)
    received.setAttack(100)
    received.getAttack(2)
    const expected = 90;
    expect(received.attack).toEqual(expected);
});

test('Проверка атаки c дурманом и дистанцией 2 клетки', () => {
    const received = new Daemon('Lucifer');
    received.setStoned(true)
    received.setAttack(100)
    received.getAttack(2)
    const expected = 85;
    expect(received.attack).toEqual(expected);
});

test('Проверка  атаки с дистанцией более 10 клеток', () => {
    const received = new Magician('Zeus');
    received.setStoned(false)
    received.getStoned()
    received.setAttack(100)
    received.getAttack(11)
    const expected = 0;
    expect(received.attack).toEqual(expected);
});


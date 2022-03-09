import Daemon from '../Daemon';
import Magician from '../Magician';


test('Проверка  атаки с дистанцией 2 клетки', () => {
    const received = new Magician('Merlin');
    received.setStoned(false)
    received.setAttack(2)
    received.getAttack()
    const expected = 90;
    expect(received.attack).toEqual(expected);
});

test('Проверка атаки c дурманом и дистанцией 2 клетки', () => {
    const received = new Daemon('Lucifer');
    received.setStoned(true)
    received.setAttack(2)
    received.getStoned()
    const expected = 85;
    expect(received.attack).toEqual(expected);
});

test('Проверка  атаки с дистанцией более 10 клеток', () => {
    const received = new Magician('Zeus');
    received.setAttack(11)
    const expected = 0;
    expect(received.attack).toEqual(expected);
});

import { cls } from './classNames';

describe('cls', () => {
    test('Test with no arguments', () => {
        expect(cls()).toBe('');
    });
    test('Test with empty params', () => {
        expect(cls('', {}, [])).toBe('');
    });
    test('Test with 1 argument', () => {
        expect(cls('someClass')).toBe('someClass');
    });
    test('Test with additional class', () => {
        expect(cls('someClass', {}, ['someClass2'])).toBe('someClass someClass2');
    });
    test('Test with mods', () => {
        expect(cls('someClass', { hovered: true, clicked: true }, ['someClass2'])).toBe('someClass someClass2 hovered clicked');
    });
    test('Test with mods when 1 of them false', () => {
        expect(cls('someClass', { hovered: true, clicked: false }, ['someClass2'])).toBe('someClass someClass2 hovered');
    });
    test('Test with mods when 1 of them undefined', () => {
        expect(cls('someClass', { hovered: true, clicked: undefined }, ['someClass2'])).toBe('someClass someClass2 hovered');
    });
});

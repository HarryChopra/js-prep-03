import * as index from '../index.js';

// console.log(myAnimal());
describe('Fix the Scope', function() {
	describe('myAnimal()', function() {
		test('returns the animal variable', () => {
			expect(index.animal).toBe('dog');
		});

		test('does not modify the  animal variable', () => {
			expect(index.myAnimal().toString()).not.toContain('animal =');
		});
	});

	describe('yourAnimal()', function() {
		test('returns your animal', function() {
			expect(index.yourAnimal()).toBe('cat');
		});

		test('does not hard-code the answer', function() {
			expect(index.yourAnimal.toString()).toContain('return animal');
			expect(index.yourAnimal.toString()).not.toContain("return 'cat'");
		});

		test('does not change the output of the myAnimal function', () => {
			expect(index.myAnimal()).toBe('dog');
		});
	});

	describe('add2(n)', function() {
		test('adds two to n', function() {
			const n = Math.floor(Math.random() * 1000);
			expect(index.add2(n)).toBe(n + 2);
		});
	});

	describe('funkyFunction()', function() {
		test('returns a function', function() {
			expect(typeof index.funkyFunction()).toBe('function');
		});
	});

	describe("the variable 'theFunk'", function() {
		test('is equal to "FUNKY!"', function() {
			expect(index.theFunk).toBe('FUNKY!');
		});
	});
});

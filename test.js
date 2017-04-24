const expect = require('chai').expect;
const platzom = require('./dist/src/platzom').default;

describe('#platzom', function () {
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
        const traslation = platzom("Programar");
        expect(traslation).to.equals("Program");
    });
    
    it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
        const traslation = platzom("Zorro");
        const traslation2 = platzom("Zarpar");
            
        expect(traslation).to.equals("Zorrope");
        expect(traslation2).to.equals("Zarppe");
    });
    
    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
        const traslation = platzom("abecedario");
        expect(traslation).to.equals("abece-dario");
    });
    
    it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
        const traslation = platzom("sometemos");
        expect(traslation).to.equals("SoMeTeMoS");
    });
});

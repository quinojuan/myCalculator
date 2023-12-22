import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useState } from 'react';

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = ( numeroTexto: string ) => {
    setNumero( numero + numeroTexto)
  }

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text 
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit  
      >{numero}</Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="DEL" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="/" color="#FF9427"  accion={limpiar} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={ armarNumero } />
        <BotonCalc texto="8" accion={ armarNumero } />
        <BotonCalc texto="9" accion={ armarNumero } />
        <BotonCalc texto="x" color="#FF9427" accion={limpiar} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={ armarNumero } />
        <BotonCalc texto="5" accion={ armarNumero } />
        <BotonCalc texto="6" accion={ armarNumero } />
        <BotonCalc texto="-" color="#FF9427" accion={limpiar} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={ armarNumero } />
        <BotonCalc texto="2" accion={ armarNumero } />
        <BotonCalc texto="3" accion={ armarNumero } />
        <BotonCalc texto="+" color="#FF9427" accion={limpiar} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* poner solo ancho es lo mismo que ancho = true */}
        <BotonCalc texto="0" accion={ armarNumero } ancho />
        <BotonCalc texto="." accion={ armarNumero } />
        <BotonCalc texto="=" color="#FF9427" accion={limpiar} />
      </View>
    </View>
  );
};

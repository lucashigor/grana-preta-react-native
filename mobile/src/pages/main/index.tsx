import React from 'react'
import { Component } from 'react';

import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import { 
	Container
	, Content
	, Card
} from './styles';

import Header from '../../Components/Header'
import Tabs from '../../Components/Tabs'
import Menu from '../../Components/Menu'
import MasterBoxes from '../../Components/MasterBoxes'

interface Props {}

const translateY = new Animated.Value(0);

const animatedEvent = Animated.event(
	[
		{
			nativeEvent: {
				translationY: translateY,
			},
		},
	],
	{ useNativeDriver: true },
)


function onHandlerStateChanged(event)
{
	let offset = 0;
	let opened = false;

	if(event.nativeEvent.oldState === State.ACTIVE){
		
		const { translationY } = event.nativeEvent;
		
		offset += translationY;

		if(translationY >= 100 )
		{
			opened = true;
		} else {
			translateY.setValue(offset);
			translateY.setOffset(0);
		}

		Animated.timing(translateY, {
			toValue: opened ? 380: 0,
			duration: 200,
			useNativeDriver: true,
		}).start(() => { 
			offset = opened ? 380 : 0;
			translateY.setValue(offset);
			translateY.setOffset(opened ? 380 : 0);
		});

	}

}

export default class Main extends Component<Props> {
	

  render() {
    return (
      <Container >
				<Header />
				<Content>
					<Menu translateY={translateY}/>

					<PanGestureHandler 
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChanged}>
					<Card style={{transform: [{
						translateY: translateY.interpolate({
							inputRange: [-350, 0, 380],
							outputRange: [-50, 0,380],
							extrapolate: 'clamp',
						}),
					}],
					}}
					>
						<MasterBoxes />
					</Card>
					</PanGestureHandler>
				</Content>
				<Tabs translateY={translateY} />
			</Container>
    );
  }
}

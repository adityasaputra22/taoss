
import React, { PureComponent } from 'react';
import { Image } from 'react-native';

const menuIcon = (
  <Image
    source={require('../../assets/images/icons/menu.png')}
    style={{ height: 14, width: 18 }}
  />
);

const notificationIcon = (
  <Image
    source={require('../../assets/images/icons/notifications.png')}
    style={{ height: 22, width: 21 }}
  />
);

const vehicleIcon = (
  <Image
    source={require('../../assets/images/icons/vehicle.png')}
    style={{ height: 50, width: 50 }}
  />
);

const distanceIcon = (
  <Image
    source={require('../../assets/images/icons/distance.png')}
    style={{ height: 50, width: 50 }}
  />
);

const optionsIcon = (
  <Image
    source={require('../../assets/images/icons/options.png')}
    style={{ height: 16, width: 16 }}
  />
);

const sqfIcon =(
  <Image
  source={require('../../assets/images/icons/signal.png')}
  style={{ height: 60, width: 60}}
/>
);

const memoryIcon =(
  <Image
  source={require('../../assets/images/icons/memory.png')}
  style={{ height: 50, width: 40 }}
/>
);

const attenuationIcon =(
  <Image
  source={require('../../assets/images/icons/broadcast-tower.png')}
  style={{ height: 50, width: 40 }}
/>
);

const timeIcon =(
  <Image
  source={require('../../assets/images/icons/clock.png')}
  style={{ height: 50, width: 50 }}
/>
);


export default class Icon extends PureComponent {
  render() {
    const { menu, notification, vehicle, distance, options, children, sqf, memory, attenuation, time } = this.props;

    if (menu) return menuIcon;
    if (notification) return notificationIcon;
    if (vehicle) return vehicleIcon;
    if (distance) return distanceIcon;
    if (options) return optionsIcon;
    if (sqf) return sqfIcon;
    if (memory) return memoryIcon;
    if (attenuation) return attenuationIcon;
    if (time) return timeIcon;

    return children || null;
  }
}

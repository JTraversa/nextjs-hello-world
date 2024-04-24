import { AvatarComponent } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import React from 'react';

const RainbowKitConstantDefautAvatar: AvatarComponent = ({ ensImage, size }) => {
	return ensImage ? (
		// eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
		<img src={ensImage} width={size} height={size} style={{ borderRadius: 999 }} />
	) : (
		<Image src="/lonely-gobbler.png" width={size} height={size} style={{ borderRadius: 999 }} className="bg-white" />
	);
};

export default RainbowKitConstantDefautAvatar;

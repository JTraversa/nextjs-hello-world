const FLOATING_POINT_REGEX = /^[Ee0-9+\-.]$/;

export function isFloatingPointNumericCharacter(character: string) {
	return FLOATING_POINT_REGEX.test(character);
}

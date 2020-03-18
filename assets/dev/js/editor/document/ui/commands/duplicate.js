import Command from 'elementor-api/modules/command';

export class Duplicate extends Command {
	apply() {
		const selectedElement = elementor.getCurrentElement();

		if ( selectedElement ) {
			return $e.run( 'document/elements/duplicate', {
				container: selectedElement.getContainer(),
			} );
		}

		return false;
	}
}

export default Duplicate;

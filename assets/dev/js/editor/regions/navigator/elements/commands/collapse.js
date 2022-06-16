import CommandNavigator from './base/command-navigator';

export class Collapse extends CommandNavigator {
	apply( args ) {
		const { containers = [ args.container ] } = args;

		containers.forEach( ( container ) => {
			if ( ! this.isFoldingAllowed( container ) ) {
				return;
			}

			$e.store.dispatch(
				$e.store.get( 'navigator/folding' ).actions.toggle( {
					elementId: container.id,
					state: false,
				} )
			);
		} );
	}
}

export default Collapse;
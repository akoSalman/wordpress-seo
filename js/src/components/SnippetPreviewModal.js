/* External dependencies */
import { Fragment, Component } from "@wordpress/element";
import { Button, Modal } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/* Yoast dependencies */
import { ButtonSection } from "yoast-components";

/* Internal dependencies */
import SnippetEditorWrapper from "../containers/SnippetEditor";
import YoastIcon from "../../../images/Yoast_icon_kader.svg";

class SnippetPreviewModal extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isOpen: false,
		};

		this.openModal = this.openModal.bind( this );
		this.closeModal = this.closeModal.bind( this );
	}

	openModal() {
		this.setState( { isOpen: true } );
	}

	closeModal() {
		this.setState( { isOpen: false } );
	}

	render() {
		return (
			<Fragment>
				<ButtonSection
					id={ "yoast-snippet-editor-sidebar" }
					title={ __( "Google preview", "wordpress-seo" ) }
					suffixIcon={ { size: "20px", icon: "pencil-square" } }
					hasSeparator={ true }
					onClick={ this.openModal }
					{ ...this.props }
				/>
				{ this.state.isOpen &&
					<Modal
						title={ __( "Google preview", "wordpress-seo" ) }
						onRequestClose={ this.closeModal }
						className="yoast-gutenberg-modal"
						icon={ <YoastIcon /> }
					>
						<SnippetEditorWrapper showCloseButton={ false } hasPaperStyle={ false } />
						<Button isSecondary={ true } onClick={ this.closeModal }>
							{ __( "Close", "wordpress-seo" ) }
						</Button>
					</Modal>
				}
			</Fragment>
		);
	}
}

export default SnippetPreviewModal;

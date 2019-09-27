<?php
/**
 * Presenter class for the OpenGraph title.
 *
 * @package Yoast\YoastSEO\Presenters
 */

namespace Yoast\WP\Free\Presenters;

use Yoast\WP\Free\Presentations\Indexable_Presentation;

/**
 * Class Title_Presenter
 */
class Open_Graph_Title_Presenter extends Abstract_Indexable_Presenter {

	/**
	 * Returns the title for a post.
	 *
	 * @param Indexable_Presentation $presentation The presentation of an indexable.
	 *
	 * @return string The title tag.
	 */
	public function present( Indexable_Presentation $presentation ) {
		$title = $this->filter( $this->replace_vars( $presentation->og_title, $presentation ) );

		if ( is_string( $title ) && $title !== '' ) {
			return '<meta property="og:title" value="' . \esc_attr( \wp_strip_all_tags( \stripslashes( $title ) ) ) . '"/>';
		}

		return '';
	}

	/**
	 * Run the title content through the `wpseo_title` filter.
	 *
	 * @param string $title The title to filter.
	 *
	 * @return string $title The filtered title.
	 */
	private function filter( $title ) {
		/**
		 * Filter: 'wpseo_og_title' - Allow changing the Yoast SEO generated title.
		 *
		 * @api string $title The title.
		 */
		return (string) trim( \apply_filters( 'wpseo_title', $title ) );
	}
}
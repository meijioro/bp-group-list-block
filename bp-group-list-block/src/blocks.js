/**
 * BLOCK: bp-group-list-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./styles/editor.scss";
import "./styles/style.scss";

import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { SelectControl } from "@wordpress/components";

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("bp-group-list/block", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("BP Group List"), // Block title.
	icon: "groups", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__("BP Group List"), __("Buddypress")],
	attributes: {
		columns: {
			type: "number",
			default: 3,
		},
		rows: {
			type: "number",
			default: 2,
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		const {
			attributes: { columns, rows },
			setAttributes,
		} = props;

		return (
			<div className="components-placeholder wp-block-embed is-large">
				<div class="components-placeholder__label">BP Group List</div>
				<SelectControl
					label="Columns"
					value={columns}
					options={[
						{ label: "Two", value: "2" },
						{ label: "Three", value: "3" },
						{ label: "Four", value: "4" },
					]}
					onChange={(columns) => {
						setAttributes({ columns });
					}}
				/>
				<SelectControl
					label="Rows"
					value={rows}
					options={[
						{ label: "Two", value: "2" },
						{ label: "Three", value: "3" },
						{ label: "Four", value: "4" },
					]}
					onChange={(rows) => {
						setAttributes({ rows });
					}}
				/>
			</div>
		);
	},

	/**
	 * Returns null since the rendering will be taken care of in the template file
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns null
	 */
	save: (props) => {
		return null;
	},
});

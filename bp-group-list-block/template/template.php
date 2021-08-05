<?php


class BPGroupListTemplate {

	function __construct() {
		register_block_type( 'bp-group-list/block', array('render_callback' => array($this, 'template')) );
	}

	function template($attributes, $content) {
		ob_start();
?>
		<?php if ( function_exists('bp_has_groups') ) : ?>
		<div class="bp-group-list">

			<h2 class="sr-only">Group List</h2>

			<?php if ( bp_has_groups() ) : ?>
				<?php
					$count = 0;
					$columns = isset($attributes['columns']) ? $attributes['columns'] : 3;
					$rows = isset($attributes['rows']) ? $attributes['rows'] : 2;

					$num_of_groups = $rows * $columns;
				?>

				<style>
					.bp-group-list {
						--columns: <?php echo $columns; ?>;
					}
				</style>

				<ul class="bp-group-list__groups">
					<?php while ( bp_groups() ) : bp_the_group(); ?>

						<?php if ($count < $num_of_groups) : ?>
							<li>
								<a
									href="<?php bp_group_permalink() ?>"
									class="bp-group-list_group">
									<?php bp_group_avatar('type=full'); ?>
									<div class="bp-group-list__group-name"><?php bp_group_name() ?></div>
								</a>
							</li>
						<?php endif; ?>
						<?php $count++; ?>

					<?php endwhile; ?>
				</ul>

				<a href="<?php echo get_site_url(); ?>/groups/" class="bp-group-list__view-more">View all groups</a>


			<?php else: ?>
				<p><?php _e( 'There were no groups found.', 'bp-group-list' ) ?></p>
			<?php endif; ?>

		</div>
		<?php else : ?>
			<?php error_log("Buddypress plugin is missing or deactivated", 0); ?>
		<?php endif; ?>

<?php
		$output = ob_get_contents();
  	ob_end_clean();
  	return $output;
	}

} // close class

new BPGroupListTemplate();


?>

import React from "react";
import styles from "./SideBar.module.css";
import SvgIcons from "../../SvgIcons";
import { ESvgIcons } from "../../Enums/svgIcons";

export default function SideBar() {
	return (
		<div>
			<div className={styles.sidebar}>
				<div className={styles.logoDetails}>
					<SvgIcons
						className={styles.sidebar_logoDetails_img}
						icon={ESvgIcons.Logo}
						size={40}
					/>
					<span className={styles.logoName}>Restaurant</span>
				</div>
				<ul className={styles.navLinks}>
					<li>
						<a href="#">
							<SvgIcons
								className={styles.sidebar_navLinks_li_img}
								icon={ESvgIcons.Pizza}
								size={15}
							/>
							<span className={styles.link_name}>Starters</span>
						</a>
					</li>
					<li>
						<div className={styles.sidebar_navLinks_li_down_arrow}>
							<a href="#">
								<SvgIcons
									className={styles.sidebar_navLinks_li_img}
									icon={ESvgIcons.Pizza}
									size={15}
								/>
								<span className={styles.link_name}>Main Course</span>
							</a>
							<SvgIcons
								className={styles.sidebar_navLinks_li_img}
								icon={ESvgIcons.DownArrow}
								size={20}
							/>
						</div>
						<ul className={styles.submenu}>
							<li>
								<a href="#">Main Course</a>
							</li>
							<li>
								<a href="#">Fried Rice</a>
							</li>
							<li>
								<a href="#">Chappathi</a>
							</li>
							<li>
								<a href="#">Non</a>
							</li>
						</ul>
					</li>
					<li>
						<div className={styles.sidebar_navLinks_li_down_arrow}>
							<a href="#">
								<SvgIcons
									className={styles.sidebar_navLinks_li_img}
									icon={ESvgIcons.Pizza}
									size={15}
								/>
								<span className={styles.link_name}>Desert</span>
							</a>
							<SvgIcons
								className={styles.sidebar_navLinks_li_img}
								icon={ESvgIcons.DownArrow}
								size={20}
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

import Link from "next/link";

import SiteLogo from "@/components/siteLogo";
import { SOCIAL_ITEMS, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
	return (
		<footer className="global-footer">
			<div className="global-footer__waves">
				<div className="global-footer__wave" />
				<div className="global-footer__wave" />
			</div>

			<div className="global-footer__content">
				<div className="global-footer__inner">
					<div className="global-footer__left">
						<form>
							<label htmlFor="email-subscribe">
								<h3>Get notified when new articles & snippets arrive.</h3>
							</label>
							<input
								id="email-subscribe"
								type="email"
								placeholder="example@email.com"
							/>
							<button className="btn">Subscribe</button>
						</form>
					</div>
					<div className="global-footer__right">
						<div className="global-footer__site-links">
							<h2>Site Links</h2>
							<nav>
								<ul>
									{NAV_ITEMS.map(({ href, label }, idx) => (
										<li key={idx}>
											<Link href={href} passHref>
												<a>{label}</a>
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className="global-footer__social">
							<h2>Get in touch</h2>
							<ul>
								{SOCIAL_ITEMS.map(({ href, icon, label }, idx) => (
									<li key={idx}>
										<Link href={href} passHref>
											<a target="_blank" rel="noopener noreferrer">
												{icon} {label}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="global-footer__lower">
					<Link href="/" passHref>
						<a>
							<SiteLogo width="8.5rem" height="8.5rem" />
						</a>
					</Link>
					<p>© {new Date().getFullYear()} DENNY HONG | ALL RIGHTS RESERVED</p>
				</div>
			</div>
		</footer>
	);
}

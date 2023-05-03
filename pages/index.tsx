import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <header className="container mx-auto">
        <div className="flex flex-col items-center text-center p-8 md:py-20">
          <h1 className="text-display-large mb-6">
            A platform for people who <span className="text-primary-700 block">love books.</span>
          </h1>
          <p className="text-paragraph-extra-large-regular md:text-md max-w-2xl">
            At BookBudy, we understand the struggle of finding your next literary adventure. That&apos;s why we&apos;re creating a platform that will provide you with all the information you need to get the best value out of your next book purchase.
          </p>
        </div>
      </header>
      <section className="container mx-auto section">
        <div className="section-header">
          <h2 className="text-header-large">Top 10 Book Charts</h2>
        </div>
        <div className="columns">
          <div className="card-list">
            <div className="card-list-header">
              <div className="card-list-avatar-heading">
                <div className="avatar avatar-48"></div>
                <div className="card-list-heading">
                  <h3 className="text-paragraph-large-bold">2022 Best Sellers</h3>
                  <p className="text-paragraph-medium-regular">@nyt</p>
                </div>
              </div>
              <a href="#">Add</a>
            </div>
            <div className="card-list-items">
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
            </div>
          </div>
          <div className="card-list">
            <div className="card-list-header">
              <div className="card-list-avatar-heading">
                <div className="avatar avatar-48"></div>
                <div className="card-list-heading">
                  <h3 className="text-paragraph-large-bold">2022 Best Sellers</h3>
                  <p className="text-paragraph-medium-regular">@nyt</p>
                </div>
              </div>
              <a href="#">Add</a>
            </div>
            <div className="card-list-items">
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
            </div>
          </div>
          <div className="card-list">
            <div className="card-list-header">
              <div className="card-list-avatar-heading">
                <div className="avatar avatar-48"></div>
                <div className="card-list-heading">
                  <h3 className="text-paragraph-large-bold">2022 Best Sellers</h3>
                  <p className="text-paragraph-medium-regular">@nyt</p>
                </div>
              </div>
              <a href="#">Add</a>
            </div>
            <div className="card-list-items">
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
              <div className="card-list-item">
                <div className="card-list-number-title">
                  <div className="number number-28 text-ui-large-bold">1</div>
                  <div className="text-paragraph-medium-regular">Tomorrow, and Tomorrow, and… </div>
                </div>
                <a href="#">Buy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto section">
        <div className="section-header">
          <h2 className="text-header-large">Recent Book Lists</h2>
        </div>
        <div className="columns">
          <div className="card-book card-book-horizontal">
            <div className="thumb"></div>
            <div className="content">
              <div className="description">
                <div className="header">
                <h3 className="title"></h3>
                </div>
              </div>
              <div className="actions"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="container mx-auto">
        <div className="animate-[slide-down-fade_0.5s_ease-in-out] flex gap-8">
          <div className="bg-primary-800 text-white effect-style-inset-shadow border-box-outline p-8 w-full">
            <div className="">
              <header className="mb-4">
                <h2 className="font-display text-2xl font-bold md:text-3xl md:font-normal mb-2">We&apos;re curious how people <span className="text-warning-400 block">select books.</span></h2>
                <div className="text-paragraph-large-regular">Vote in our poll to find out.</div>
              </header>
            </div>
            <div className=""><a href="https://take.quiz-maker.com/poll4781734x941A4a43-148" target="_blank" rel="noreferrer">Image</a></div>
          </div>
          <div className="bg-warning-400 effect-style-inset-shadow border-box-outline p-8 w-full">
            <div className="">
              <header className="mb-4">
                <h2 className="font-display text-2xl font-bold md:text-3xl md:font-normal mb-2">Stay up to date with <span className="text-primary-800 block">our newsletters.</span></h2>
                <div className="text-paragraph-large-regular">Be the first to know when BookBudy launches.</div>
              </header>
            </div>
            <div className="">Form</div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}

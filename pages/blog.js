import React from "react";
import Layout from "../components/Layout";
import firebase from "../firebase";
import Link from "next/link";
import Moment from "react-moment";
import "moment-timezone";
import { useEffect, useState } from "react";


function getArticles() {
  const [articles, setArticles] = React.useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("articles")
      .orderBy("date", "desc")
      .get()
      .then((snapshot) => {
        let arrData = [];
        snapshot.forEach((doc) => {
          arrData.push({ id: doc.id, ...doc.data() });
        });
        setArticles(arrData);
      });
  }, []);
  return articles
}

const Blog = () => {
  const articles= getArticles()
  console.log(articles)
    const [search, setSearch] = useState([]);
    const onSearch = (value) => {
        setSearch(
        articles.filter((items) => {
          return items.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        })
      );
    };
  return (
    <Layout title="Blog">
      {/* breadcrumb start*/}
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Our Blog</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb start*/}
      {/*================Blog Area =================*/}
      <section className="blog_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {search.map((post) => (
                  <article key={post.id} className="blog_item">
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src={post.thumbnail}
                        alt
                      />
                      <a href="#" className="blog_item_date">
                        <h3>{post.date.slice(5, 7)}</h3>
                        <p>
                          <Moment format="MMM">{post.date}</Moment>
                        </p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <Link
                        className="d-inline-block"
                        href="[id]"
                        as={`${post.slug}`}
                      >
                        <h2>{post.title}</h2>
                      </Link>
                      <p>{post.preview}</p>
                      <ul className="blog-info-link">
                        <li>
                          <a href="#">
                            <i className="far fa-user" /> {post.author}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-comments" /> {post.comment}{" "}
                            Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keyword"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Search Keyword'"
                          onChange={(e) => onSearch(e.target.value)}
                        />
                        <div className="input-group-append">
                          <button className="btn" type="button">
                            <i className="ti-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Category</h4>
                  <ul className="list cat-list">
                    <li>
                      <button id="tab" href="#" className="d-flex">
                        DIY
                      </button>
                    </li>
                    <li>
                      <button id="tab" href="#" className="d-flex">
                        Restaurant Food
                      </button>
                    </li>
                    <li>
                      <button id="tab" href="#" className="d-flex">
                        Hotel Review
                      </button>
                    </li>
                    <li>
                      <button id="tab" href="#" className="d-flex">
                        Eating Out
                      </button>
                    </li>
                  </ul>
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  <div className="media post_item">
                    <img src="img/post/post_1.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>From life was you fish...</h3>
                      </a>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/post/post_2.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/post/post_3.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/post/post_4.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </aside>
                <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    <li>
                      <a href="#">project</a>
                    </li>
                    <li>
                      <a href="#">love</a>
                    </li>
                    <li>
                      <a href="#">technology</a>
                    </li>
                    <li>
                      <a href="#">travel</a>
                    </li>
                    <li>
                      <a href="#">restaurant</a>
                    </li>
                    <li>
                      <a href="#">life style</a>
                    </li>
                    <li>
                      <a href="#">design</a>
                    </li>
                    <li>
                      <a href="#">illustration</a>
                    </li>
                  </ul>
                </aside>
                <aside className="single_sidebar_widget instagram_feeds">
                  <h4 className="widget_title">Instagram Feeds</h4>
                  <ul className="instagram_row flex-wrap">
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_5.png"
                          alt
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_6.png"
                          alt
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_7.png"
                          alt
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_8.png"
                          alt
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_9.png"
                          alt
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_10.png"
                          alt
                        />
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email'"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_4"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

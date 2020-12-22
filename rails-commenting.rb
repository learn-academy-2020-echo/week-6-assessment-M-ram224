# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) The BlogPostsController is the controller for all of the methods to be used in the application so we can use it on the web application.
class BlogPostsController < ApplicationController
  def index
    # 2) @posts is an instance variable setup inside of our index(which routes as a get) to access all of our BlogPosts models previously made.
    @posts = BlogPost.all
  end

  def show
    # 3) @post is an instance variable setup inside of our show(Which routes as a get) to access only a single model in BlogPost using .find and the params that recieves info from the rails server of an :id.
    @post = BlogPost.find(params[:id])
  end

  # 4) The method defined as new(which routes as a get) is made to create and post new information in our web application by the user.
  def new
    @post = Post.new
  end

  def create
    # 5) @post instance variable is being setup inside of our method create(which routes as a post) to create posts in the web application the using a strong params to keep out unwanted hacker.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) @post is made to update(which routes to put and patch) a post while still using the security of strong params to keep hackers out.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) This else is here to redirect you to the show page if you dont end up deleting anything.
      redirect_to blog_post_path(@post)
    end
  end

  # 8) Private is a rails protective method where anything below its line can only be called inside of the class. Below this is where the strong params lives providing strong security to our web application from hackers.
  private
  def blog_post_params
    # 9) params is requiring that the attributes being passed into :blog_post to be present in the create or update methods. Then .permit allows :title and :content to be present but attributes that arent listed will not be allowed to be present.
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) has_many is giving the blog the ability to have comments in the scope of the application.
  has_many :comments
end

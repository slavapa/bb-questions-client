class HomeController < ApplicationController
  before_action :allow_iframe_requests
  
  def default
  end

  def about
  end

  def update
  end

  def contact_us
  end
  
   
  def iframe_example
  end
   
  def ajax_example
  end
  
private

  def allow_iframe_requests
    # response.headers.delete('X-Frame-Options')
  end
  
end

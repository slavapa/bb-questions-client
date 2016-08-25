require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get default" do
    get :default
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get update" do
    get :update
    assert_response :success
  end

  test "should get contact_us" do
    get :contact_us
    assert_response :success
  end

end

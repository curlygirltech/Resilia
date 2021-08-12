class NotificationsController < ApplicationController
  # before_action :set_notification, only: [:show, :update, :destroy]

  # GET /notifications
  def index
    @notifications = Notification.all

    render json: @notifications
  end
end
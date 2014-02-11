class EventsController < ApplicationController
  respond_to :json
  
  def index
    respond_with Event.all
  end
  
  def show
    respond_with Event.find(params[:id])
  end
  
  def create
    respond_with Event.create(params[:event])
  end
  
  def update
    respond_with Event.update(params[:id], params[:event])
  end
  
  def destroy
    respond_with Event.destroy(params[:id])
  end
end
